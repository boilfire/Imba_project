# Imba_project

Requirements:

    python 3.x
    angular cli
    node
    postgresql (sudo apt-get install postgresql postgresql-contrib)
    
Create DataBase:

    sudo su - postgres
    psql
    CREATE DATABASE imba;
    CREATE USER boilfire WITH PASSWORD 'lol';
    ALTER ROLE boilfire SET client_encoding TO 'utf8';
    ALTER ROLE boilfire SET default_transaction_isolation TO 'read committed';
    ALTER ROLE boilfire SET timezone TO 'UTC';
    
    GRANT ALL PRIVILEGES ON DATABASE imba TO boilfire;
    
Run the project:

    git clone https://github.com/boilfire/Imba_project.git
    
Download python packages:
  
    pip3 install django pymysql djangorestframework djangorestframework-jwt django-cors-headers
    
Go to the path of the cloned project (on the /server directory) and run :
    
    python3 manage.py makemigrations
    python3 manage.py migrate
    python3 manage.py runserver
    
Go to the path of the cloned project (on the /client directory) and run :
    
    npm start

Visit the localhost:4200/ And see the project!
