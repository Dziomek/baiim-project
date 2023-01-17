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

## Zadania
Przed rozpoczęciem zadań utwórz kilku użytkowników, po zalogowaniu dodaj kilka postów. Przeanalizuj strukturę frontendu i backendu oraz komunikację między nimi.

# Zadanie 1.
Sprawdź w jaki sposób wyświetlane są posty użytkownika w aplikacji. Czy da się uzyskać dostęp do postów innego użytkownika nie znając jego danych logowania? Jeśli tak, napisz jak to zrobić.

# Zadanie 2.
Przeanalizuj działanie funkcji odpowiedzialnych za usuwanie postów. Czy da się usunąć posty innego użytkownika? Jeśli tak, napisz w jaki sposób.

# Zadanie 3.(Yana)


# Zadanie 4.
Wskaż 3 problemy bezpieczeństwa testowanej aplikacji. Na podstawie prezentacji oraz własnych przemyśleń zaproponuj w jaki sposób można je rozwiązać(problem -> rozwiązanie).
