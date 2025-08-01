@echo off
chcp 65001 >nul
setlocal enabledelayedexpansion

:: LifeMapHub 项目启动脚本 (Windows)
:: 作者: LifeMapHub Team
:: 版本: 1.0.0

set "PROJECT_NAME=LifeMapHub"
set "PROJECT_DIR=%~dp0"

:: 颜色定义 (Windows CMD)
set "COLOR_RED=[91m"
set "COLOR_GREEN=[92m"
set "COLOR_YELLOW=[93m"
set "COLOR_BLUE=[94m"
set "COLOR_RESET=[0m"

:: 显示欢迎信息
:show_welcome
echo %COLOR_BLUE%
echo ╔══════════════════════════════════════════════════════════════╗
echo ║                        LifeMapHub                            ║
echo ║                   个人主页启动脚本                           ║
echo ║                                                              ║
echo ║  React + TypeScript + Tailwind CSS                          ║
echo ╚══════════════════════════════════════════════════════════════╝
echo %COLOR_RESET%
goto :eof

:: 日志函数
:log_info
echo %COLOR_BLUE%[INFO]%COLOR_RESET% %~1
goto :eof

:log_success
echo %COLOR_GREEN%[SUCCESS]%COLOR_RESET% %~1
goto :eof

:log_warning
echo %COLOR_YELLOW%[WARNING]%COLOR_RESET% %~1
goto :eof

:log_error
echo %COLOR_RED%[ERROR]%COLOR_RESET% %~1
goto :eof

:: 检查 Node.js 环境
:check_node
call :log_info "检查 Node.js 环境..."

where node >nul 2>&1
if %errorlevel% neq 0 (
    call :log_error "Node.js 未安装，请先安装 Node.js"
    call :log_info "推荐版本: Node.js 16.x 或更高版本"
    call :log_info "下载地址: https://nodejs.org/"
    pause
    exit /b 1
)

for /f "tokens=*" %%a in ('node --version') do set "NODE_VERSION=%%a"
call :log_success "Node.js 版本: !NODE_VERSION!"

where npm >nul 2>&1
if %errorlevel% neq 0 (
    call :log_error "npm 未安装"
    pause
    exit /b 1
)

for /f "tokens=*" %%a in ('npm --version') do set "NPM_VERSION=%%a"
call :log_success "npm 版本: !NPM_VERSION!"
goto :eof

:: 检查依赖
:check_dependencies
call :log_info "检查项目依赖..."

if not exist "node_modules" (
    call :log_warning "依赖未安装，正在安装..."
    call :install_dependencies
) else (
    call :log_success "依赖已安装"
)
goto :eof

:: 安装依赖
:install_dependencies
call :log_info "安装项目依赖..."

if exist "package-lock.json" (
    npm ci
) else (
    npm install
)

if %errorlevel% equ 0 (
    call :log_success "依赖安装完成"
) else (
    call :log_error "依赖安装失败"
    pause
    exit /b 1
)
goto :eof

:: 启动开发服务器
:start_dev_server
call :log_info "启动开发服务器..."

:: 设置环境变量
set BROWSER=none

call :log_info "正在启动 React 开发服务器..."
call :log_info "请稍候..."

npm start
goto :eof

:: 构建生产版本
:build_production
call :log_info "构建生产版本..."

if exist "build" (
    rmdir /s /q "build"
    call :log_info "清理旧的构建文件"
)

npm run build

if %errorlevel% equ 0 (
    call :log_success "构建完成！文件位于 build\ 目录"
    call :log_info "可以使用以下命令预览："
    call :log_info "  npx serve -s build"
) else (
    call :log_error "构建失败"
    pause
    exit /b 1
)
goto :eof

:: 运行测试
:run_tests
call :log_info "运行测试..."
npm test -- --watchAll=false
goto :eof

:: 清理项目
:clean_project
call :log_info "清理项目..."

if exist "node_modules" (
    rmdir /s /q "node_modules"
    call :log_success "已清理 node_modules"
)

if exist "build" (
    rmdir /s /q "build"
    call :log_success "已清理 build 目录"
)

if exist "package-lock.json" (
    del "package-lock.json"
    call :log_success "已清理 package-lock.json"
)

call :log_success "项目清理完成"
goto :eof

:: 显示帮助信息
:show_help
echo %COLOR_BLUE%使用方法:%COLOR_RESET%
echo   start.bat [选项]
echo.
echo %COLOR_BLUE%选项:%COLOR_RESET%
echo   dev, start    启动开发服务器 (默认)
echo   build         构建生产版本
echo   test          运行测试
echo   install       安装/更新依赖
echo   clean         清理依赖和构建文件
echo   help          显示此帮助信息
echo.
echo %COLOR_BLUE%示例:%COLOR_RESET%
echo   start.bat          # 启动开发服务器
echo   start.bat build    # 构建生产版本
echo   start.bat test     # 运行测试
goto :eof

:: 主函数
:main
cd /d "%PROJECT_DIR%"

set "action=%~1"
if "%action%"=="" set "action=dev"

if "%action%"=="dev" goto :dev_mode
if "%action%"=="start" goto :dev_mode
if "%action%"=="build" goto :build_mode
if "%action%"=="test" goto :test_mode
if "%action%"=="install" goto :install_mode
if "%action%"=="clean" goto :clean_mode
if "%action%"=="help" goto :help_mode
if "%action%"=="-h" goto :help_mode
if "%action%"=="--help" goto :help_mode

call :log_error "未知选项: %action%"
call :show_help
pause
exit /b 1

:dev_mode
call :show_welcome
call :check_node
call :check_dependencies
call :start_dev_server
goto :end

:build_mode
call :show_welcome
call :check_node
call :check_dependencies
call :build_production
goto :end

:test_mode
call :show_welcome
call :check_node
call :check_dependencies
call :run_tests
goto :end

:install_mode
call :show_welcome
call :check_node
call :install_dependencies
goto :end

:clean_mode
call :show_welcome
call :clean_project
goto :end

:help_mode
call :show_welcome
call :show_help
goto :end

:end
if "%action%"=="dev" pause
if "%action%"=="start" pause 