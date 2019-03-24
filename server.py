from flask import Flask, g, render_template, session
from jinja2 import StrictUndefined

app = Flask(__name__)
app.secret_key = 'FLASK_APP_KEY'
app.jinja_env.undefined = StrictUndefined


@app.route('/')
def show_homepage():
    """Display homepage."""

    return render_template("base.html")


if __name__ == "__main__":
    app.debug = True
    app.jinja_env.auto_reload = app.debug
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    app.run(port=5000, host='0.0.0.0')
