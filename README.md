# baiim-project
## Początkowa konfiguracja
W przypadku problemów z terminalem (np. aktywacja venv) należy użyć innego niż PowerShell, np. windowsowy Command Prompt

Z poziomu folderu z projektem:
- virtualenv venv
- venv\Scripts\activate
- pip install -r requirements.txt

Z poziomu folderu react_native_app:
- npm install

## Start Flaska
Z poziomu folderu flask_api:
- flask run

## Start React Native
Z poziomu folderu react_native_app:
- npm run web - aby otworzyć apkę w przeglądarce lub
- npm run android - aby otworzyć apkę w emulatorze (może być to np. emulator z Android Studio, jeśli będzie włączony, zostanie wykryty i apka się uruchomi)
- npm run ios - to samo, ale na iOS
