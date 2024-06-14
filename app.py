from flask import Flask, render_template, request
import sqlite3

# (A2) FLASK SETTINGS + INIT
HOST_NAME = "localhost"
HOST_PORT = 80
app = Flask(__name__)
# app.debug = True

# (B) DUMMY PAGE
@app.route("/", methods=["GET", "POST"])
def index():
  # (B1) SAVE ON FORM SUBMIT
  saved = False
  if request.method == "POST":


    # Save the data to a text file
    with open('submissions.txt', 'a') as file:
        file.write(f"Name: {request.values.get('name')}\n, Email: {request.values.get('email')}\n, Message :{request.values.get('msg')}\n\n\n")

    conn = sqlite3.connect("message.db")
    cursor = conn.cursor()
    cursor.execute("INSERT INTO message ('name','email', 'msg') VALUES (?,?,?)", (request.values.get('name'),request.values.get("email"), request.values.get("msg")))
    conn.commit()
    conn.close()
    saved = True

    
  # (B2) RENDER PAGE
  return render_template("base.html", saved=saved)

# (C) START
if __name__ == "__main__":
  app.run(HOST_NAME, HOST_PORT)