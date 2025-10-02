pipeline {
    agent any

    environment {
        NODE_VERSION = "18"
        APP_DIR = "/var/www/eventry"  // where app will live on the server
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/mayorpasca32/Mayor_event.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh '''
                # Install Node.js if not installed
                if ! command -v node >/dev/null 2>&1; then
                  curl -fsSL https://deb.nodesource.com/setup_${NODE_VERSION}.x | sudo -E bash -
                  sudo apt-get install -y nodejs
                fi
            }
        }

        stage('Build') {
            steps {
                sh '''
                yarn build
                '''
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                sudo rm -rf ${APP_DIR}
                sudo mkdir -p ${APP_DIR}
                sh """
                sudo cp -r .next out public package.json ${APP_DIR} || true
                """
                sudo cp -r next.config.js ${APP_DIR} || true
                sudo chown -R www-data:www-data ${APP_DIR}
                '''
            }
        }

        stage('Restart Nginx') {
            steps {
                sh '''
                sudo systemctl restart nginx
                '''
            }
        }
    }
}
