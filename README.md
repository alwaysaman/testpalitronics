# testpalitronics

Create a branch with your name and checkout to that branch.

***Do not push the code on Master***

Create a component to load response from below API in card format.
GET: https://palitronicstest.herokuapp.com/getallexam

RESPONSE: [{
        "id": "1",
        "label": "Exam1",
        "duration": "60",
        "Subject": "English"
    }]


the response returns id as shown above: Onclicking one box it should pick up an ID and make another call towards:

GET: https://palitronicstest.herokuapp.com/exams/{examId}

The response of this API can be displayed on UI directly