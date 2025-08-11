/* Form layout improvements */
.form-row {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    margin-bottom: 16px;
    align-items: center;
}
.form-row label {
    min-width: 120px;
    margin-bottom: 0;
}
.form-row input,
.form-row select {
    flex: 1 1 180px;
    margin-bottom: 0;
}
fieldset {
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    padding: 16px 12px 8px 12px;
    margin-bottom: 20px;
    background: #f9fbfd;
}
.form-actions {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    margin-top: 10px;
}
/* Renamed from styles.css.txt */
body {
    font-family: Arial, sans-serif;
    background: #f4f8fb;
    margin: 0;
    padding: 0;
}
.container {
    max-width: 400px;
    margin: 60px auto;
    background: #fff;
    padding: 30px 40px;
    border-radius: 10px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}
h1 {
    text-align: center;
    color: #2a6ebb;
}
form {
    display: flex;
    flex-direction: column;
}
label {
    margin-top: 15px;
    margin-bottom: 5px;
    color: #333;
}
input {
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 5px;
}
button {
    margin-top: 20px;
    padding: 10px;
    background: #2a6ebb;
    color: #fff;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
}
button:hover {
    background: #1d4e8c;
}
.hidden {
    display: none;
}
#confirmation {
    margin-top: 20px;
    color: green;
    text-align: center;
}
