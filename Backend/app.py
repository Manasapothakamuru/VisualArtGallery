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
   query=f"INSERT INTO products1(Name, Price, Rating, Category) VALUES ('{data['Name']}','{data['Price']}','{data['Rating']}','{data['Category']}')"
   cursor.execute(query)
   connection.commit()
   cursor.close()
   return "True"

@app.route('/CartPostItems', methods=['POST'])
def cartpost_data():
    cursor = connection.cursor()
    data = request.get_json()
    query=f"INSERT INTO carttable(Name, Price, Rating ) VALUES ('{data['Name']}','{data['Price']}','{data['Rating']}')"
    cursor.execute(query)
    connection.commit()
    cursor.close()
    return "True"

@app.route('/getCartItems')
def getCart_data():
    cursor = connection.cursor()

    # Execute your MySQL query here
    query = "SELECT * FROM carttable ;"
    cursor.execute(query)

    # Fetch the data and format as needed
    result = cursor.fetchall()

    cursor.close()
    return result

@app.route('/removeCartItems/<int:id>',methods=['DELETE'])
def removeCartItems(id):
    cursor = connection.cursor()

    # Execute your MySQL query here
    query = f"DELETE FROM carttable WHERE Id={id};"
    cursor.execute(query)

    # Fetch the data and format as needed
    result = cursor.fetchall()
    connection.commit()
    cursor.close()
    return result

    

if __name__ == '__main__':
    app.run(debug=True)
