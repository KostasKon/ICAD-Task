# ICAD Task - Semester assignment - Konstantinos Kontos

This project is a simple announcement billboard. It is meant to be a sort of an app that a group of people to use to make public announcements. Users can only be created by an administrator inside Django.

This project is broken up into a backend and frontend. The backend contains the Django project which uses the Django Rest Framework to host a simple API. The frontend uses React and queries data from the API.

You will need NPM installed. Run these commands to install it:

```json
wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash
nvm install --lts node
```

Run the following commands to get started:

```json
virtualenv env
source env/bin/activate
pip install -r requirements.txt
npm i
npm run build
python manage.py runserver
```

And then:

```json
python manage.py createsuperuser
```
To create a user with admin privileges so that you can access the app in its entirety.

Remove the git repo with this command on mac/linux:

```json
rm -rf .git
```

and this on windows:

```json
rmdir .git
```
