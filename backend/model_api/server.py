from fastapi import FastAPI
import pickle

app = FastAPI()

model = pickle.load(open("model.pkl", "rb"))
vectorizer = pickle.load(open("vectorizer.pkl", "rb"))

@app.post("/predict")
def predict(data: dict):
    text = data["text"]

    vec = vectorizer.transform([text])
    pred = model.predict(vec)[0]

    return {
        "result": "Scam" if pred == 1 else "Real"
    }