from flask import Flask, jsonify, request
import pymysql


# from Flask-Cors import CORS

app = Flask(__name__)
# CORS(app, origins='*')

connection = pymysql.connect(host='localhost',
                             user='root',
                             password='Manasa@071200',
                             database='artGallery',
                             cursorclass=pymysql.cursors.DictCursor)

@app.route('/getItems')
def home():
    cursor = connection.cursor()

    # Execute your MySQL query here
    query = "SELECT * FROM products1;"
    cursor.execute(query)

    # Fetch the data and format as needed
    result = cursor.fetchall()

    cursor.close()
    return result

@app.route('/postItems', methods=['POST'])
def post_data():

    
   cursor = connection.cursor()
   data = request.get_json()
   query=f"INSERT INTO products1(Name, Price, Rating ) VALUES ('{data['Name']}','{data['Price']}','{data['Rating']}')"
   cursor.execute(query)
   connection.commit()
   cursor.close()
   return "True"

    

if __name__ == '__main__':
    app.run(debug=True)
