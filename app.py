from flask import Flask, render_template
from flask_socketio import SocketIO, emit

app = Flask(__name__)
app.config['SECRET_KEY'] = 'pass'
socketio = SocketIO(app)

@app.route('/')
def index():
    return render_template('index.html')

@socketio.on('message')
def mensajes(data):
    #print('Desde JS: ' + data['nombre']+ ': '+ data['chat'])
    emit('message', data, broadcast=True)

if __name__ == '__main__':
    socketio.run(app, debug=True)