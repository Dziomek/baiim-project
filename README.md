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

# Zadania
Przed rozpoczęciem zadań utwórz kilku użytkowników, po zalogowaniu dodaj kilka postów. Przeanalizuj strukturę frontendu i backendu oraz komunikację między nimi.

## Zadanie 1.
Sprawdź w jaki sposób wyświetlane są posty użytkownika w aplikacji. Czy da się uzyskać dostęp do postów innego użytkownika nie znając jego danych logowania? Jeśli tak, napisz jak to zrobić.

## Zadanie 2.
Przeanalizuj działanie funkcji odpowiedzialnych za usuwanie postów. Czy da się usunąć posty innego użytkownika? Jeśli tak, napisz w jaki sposób.

## Zadanie 3.
Przeprowadź atak man-in-the-middle na postawie przechwycenia ruchu https za pomocą narzędzia mitmproxy. 

*Uwaga: Korzystanie z narzędzia mitmproxy może mieć negatywne skutki dla urządzenia, jeśli jest używane nieodpowiedzialnie lub bez pozwolenia. Mitmproxy pozwala na przechwytywanie i manipulowanie ruchem sieciowym, co może prowadzić do utraty danych lub zabezpieczeń, jeśli narzędzie jest używane nieodpowiednio. Dlatego ważne jest, aby korzystać z mitmproxy odpowiedzialnie i tylko na sieciach i urządzeniach, na których masz pozwolenie na jego użycie.*

Krok 1: Instalacja mitmproxy

[mitmproxy.org](https://mitmproxy.org)

Krok 2: Konfiguracja serwera proxy HTTP

Mitmproxy domyślnie uruchamia się jako zwykły serwer proxy HTTP i nasłuchuje na http://localhost:8080. Aby cały ruch był kierowany przez mitmproxy: (dla Windows 10) Ustawienia serwera proxy -> Ręczna konfiguracja serwera proxy -> adres: http://localhost, port: 8080

Krok 3: Pobranie certyfikatu mitmproxy 

[mitm.it](http://mitm.it)

Postępuj zgodnie z instrukcjami instalacji w systemie Windows.

Krok 4: Uruchomić mitmproxy i aplikację

Zadanie do wykonania: zaobserwuj ruch https, po czym spróbuj przechwycić dane uwierzytelniające użytkownika.

## Zadanie 4.
Wskaż 3 problemy bezpieczeństwa testowanej aplikacji. Na podstawie prezentacji oraz własnych przemyśleń zaproponuj w jaki sposób można je rozwiązać(problem -> rozwiązanie).
