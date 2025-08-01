#!/bin/bash

# LifeMapHub 项目启动脚本
# 作者: LifeMapHub Team
# 版本: 1.0.0

set -e  # 遇到错误时退出

# 颜色定义
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# 项目信息
PROJECT_NAME="LifeMapHub"
PROJECT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# 日志函数
log_info() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

log_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

log_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

log_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# 显示欢迎信息
show_welcome() {
    echo -e "${BLUE}"
    echo "╔══════════════════════════════════════════════════════════════╗"
    echo "║                        LifeMapHub                            ║"
    echo "║                   个人主页启动脚本                           ║"
    echo "║                                                              ║"
    echo "║  React + TypeScript + Tailwind CSS                          ║"
    echo "╚══════════════════════════════════════════════════════════════╝"
    echo -e "${NC}"
}

# 检查 Node.js 环境
check_node() {
    log_info "检查 Node.js 环境..."
    
    if ! command -v node &> /dev/null; then
        log_error "Node.js 未安装，请先安装 Node.js"
        log_info "推荐版本: Node.js 16.x 或更高版本"
        log_info "下载地址: https://nodejs.org/"
        exit 1
    fi
    
    NODE_VERSION=$(node --version)
    log_success "Node.js 版本: $NODE_VERSION"
    
    if ! command -v npm &> /dev/null; then
        log_error "npm 未安装"
        exit 1
    fi
    
    NPM_VERSION=$(npm --version)
    log_success "npm 版本: $NPM_VERSION"
}

# 检查依赖
check_dependencies() {
    log_info "检查项目依赖..."
    
    if [ ! -d "node_modules" ]; then
        log_warning "依赖未安装，正在安装..."
        install_dependencies
    else
        log_success "依赖已安装"
    fi
}

# 安装依赖
install_dependencies() {
    log_info "安装项目依赖..."
    
    if [ -f "package-lock.json" ]; then
        npm ci
    else
        npm install
    fi
    
    log_success "依赖安装完成"
}

# 检查端口占用
check_port() {
    local port=${1:-3000}
    log_info "检查端口 $port 是否可用..."
    
    if lsof -Pi :$port -sTCP:LISTEN -t >/dev/null 2>&1; then
        log_warning "端口 $port 已被占用"
        log_info "正在尝试查找可用端口..."
        return 1
    else
        log_success "端口 $port 可用"
        return 0
    fi
}

# 启动开发服务器
start_dev_server() {
    log_info "启动开发服务器..."
    
    # 设置环境变量
    export BROWSER=none  # 防止自动打开浏览器（可选）
    
    # 启动服务器
    log_info "正在启动 React 开发服务器..."
    log_info "请稍候..."
    
    npm start
}

# 构建生产版本
build_production() {
    log_info "构建生产版本..."
    
    # 清理旧的构建文件
    if [ -d "build" ]; then
        rm -rf build
        log_info "清理旧的构建文件"
    fi
    
    # 构建
    npm run build
    
    if [ $? -eq 0 ]; then
        log_success "构建完成！文件位于 build/ 目录"
        log_info "可以使用以下命令预览："
        log_info "  npx serve -s build"
    else
        log_error "构建失败"
        exit 1
    fi
}

# 运行测试
run_tests() {
    log_info "运行测试..."
    npm test -- --watchAll=false
}

# 显示帮助信息
show_help() {
    echo -e "${BLUE}使用方法:${NC}"
    echo "  ./start.sh [选项]"
    echo ""
    echo -e "${BLUE}选项:${NC}"
    echo "  dev, start    启动开发服务器 (默认)"
    echo "  build         构建生产版本"
    echo "  test          运行测试"
    echo "  install       安装/更新依赖"
    echo "  clean         清理依赖和构建文件"
    echo "  help          显示此帮助信息"
    echo ""
    echo -e "${BLUE}示例:${NC}"
    echo "  ./start.sh          # 启动开发服务器"
    echo "  ./start.sh build    # 构建生产版本"
    echo "  ./start.sh test     # 运行测试"
}

# 清理项目
clean_project() {
    log_info "清理项目..."
    
    if [ -d "node_modules" ]; then
        rm -rf node_modules
        log_success "已清理 node_modules"
    fi
    
    if [ -d "build" ]; then
        rm -rf build
        log_success "已清理 build 目录"
    fi
    
    if [ -f "package-lock.json" ]; then
        rm package-lock.json
        log_success "已清理 package-lock.json"
    fi
    
    log_success "项目清理完成"
}

# 主函数
main() {
    cd "$PROJECT_DIR"
    
    case "${1:-dev}" in
        "dev"|"start"|"")
            show_welcome
            check_node
            check_dependencies
            check_port 3000
            start_dev_server
            ;;
        "build")
            show_welcome
            check_node
            check_dependencies
            build_production
            ;;
        "test")
            show_welcome
            check_node
            check_dependencies
            run_tests
            ;;
        "install")
            show_welcome
            check_node
            install_dependencies
            ;;
        "clean")
            show_welcome
            clean_project
            ;;
        "help"|"-h"|"--help")
            show_welcome
            show_help
            ;;
        *)
            log_error "未知选项: $1"
            show_help
            exit 1
            ;;
    esac
}

# 执行主函数
main "$@" 