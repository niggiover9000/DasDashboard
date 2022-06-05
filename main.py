from flask import Flask, render_template, request, redirect, url_for
from random import getrandbits

app = Flask(__name__)
app.secret_key = f"{getrandbits(512)}"


user = "Test"


@app.route('/')
@app.route('/home')
def home():
    return render_template('home.html', user=user, pagename="Home", version="0.1.0", date=[5, 6, 2022, "Sonntag"])


if __name__ == '__main__':
    app.run(debug=True)
