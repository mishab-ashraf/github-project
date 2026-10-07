pipeline{
    agent any
    stages{
        stage('checkout'){
            steps{
                deleteDir()
                sh '''
                    git clone https://github.com/mishab-ashraf/github-project.git
                    ls -l
                '''
            }
        }
        stage('deploy'){
            steps{
                sh '''
                    cp -r github-project/* /var/www/html
                    ls -l /var/www/html
                '''
                    
            }
        }
        
    }
}
