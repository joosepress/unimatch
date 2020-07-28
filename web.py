from flask import Flask, render_template

app = Flask(__name__)

@app.route('/') ##  kui baasurl on unifinder.com, siis unifinder.com/profile
def profile():
	return render_template("makett.html")