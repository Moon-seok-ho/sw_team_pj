from flask import Flask, render_template, request
from flask_ngrok import run_with_ngrok
from model import summary_model, emo_model, model_visualization, keyword_model
import numpy as np
import json

app = Flask(__name__)
run_with_ngrok(app)

# @app.route("/")
# def start():
#     return render_template('index.html')

# @app.route("/login")
# def signin():
#     return render_template('login.html')

# @app.route("/register")
# def signup():
#     return render_template('register.html')

@app.route('/mltest', methods=['POST'])
def test():
    lists = request.args['file_name']
    lists = lists.split(',')
    data = []
    for list in lists:
        data.append(list)

    return result


@app.route("/")
def home():
    return render_template('home.html')

@app.route("/anl", methods=['POST'])
def analyze_sentence():
    if request.method == 'POST':
        text = request.form.get("diary") # 입력받기
        oneLine_text = text_oneLine(text)
        summ = summary_model(oneLine_text)
        emo_list = emo_model(summ)
        model_visualization(emo_list)
        key_list = keyword_model(text)
    else:
        summ = "분석 실패"
    return search_diary(summ , key_list)

@app.route("/write")
def write_diary():
    return render_template('write.html')

@app.route("/diary")
def search_diary(summ, key_list):
    return render_template('diary.html', summary = summ, kwd = key_list)

# @app.route("/mypage")
# def search_myinfo():
#     return render_template('mypage.html')

# @app.route("/editinfo")
# def update_myinfo():
#     return render_template('editinfo.html')

def text_oneLine(text):
    applied_text = text.replace("\n", "")
    applied_text = text.replace("\t", "")
    return applied_text

if __name__ == "__main__":
    app.run()