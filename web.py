from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def profile():
	return render_template("makett.html")

@app.route('/kusimustik/')
def kusimustik():
	return 'Vasta'