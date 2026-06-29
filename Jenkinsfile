stage('Deploy') {
    steps {
        sh '''
        docker stop employee-api || true
        docker rm employee-api || true

        docker pull snehbhav/employee-api:v2

        docker run -d \
          --name employee-api \
          -p 3000:3000 \
          snehbhav/employee-api:v2
        '''
    }
}