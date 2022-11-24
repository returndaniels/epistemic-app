# EpistemicApp

@author Daniel Silva

Este aplicativo é um teste feito em React Native que simula uma interface de login do EpistemicApp.
A aplicação utiliza um sistema de autenticação simples desenvolvido em NodeJS e MongoDB que pode ser acessado [aqui](https://github.com/returndaniels/epistemic-api).

## Executar em modo teste

```bash
npm install --location=global expo-cli
cd epistemic-app
npm install
expo start
```

## Gerando uma build

Para gerar a buil é necessário primeiro instalar o eas-cli

```
npm install -g eas-cli
```

### Para gerar o APK/AAB para Android:

```bash
eas build -p android
```

Se quiser gerar um arquivo APK execute

```bash
eas build -p android --profile preview
```

ATENÇÃO: Certifique-se de que as váriavéis de ambiente `JAVA_HOME` e `ANDROID_SDK` estão definidadas corretamente, como no exemplo abaixo

```bash
export ANDROID_SDK="C:\Users\<user_name>\AppData\Local\Android\sdk"
export JAVA_HOME="C:\Program Files\Android\Android Studio\jre"
```

### Para gerar o IPA para iOS:

```bash
eas build -p ios
```

## Dependências

    "@react-native-async-storage/async-storage": "^1.17.11",
    "@react-native-community/masked-view": "^0.1.11",
    "@react-navigation/native": "^6.0.14",
    "@react-navigation/native-stack": "^6.9.1",
    "expo": "~47.0.6",
    "expo-linear-gradient": "^12.0.1",
    "expo-splash-screen": "~0.17.5",
    "expo-status-bar": "~1.4.2",
    "expo-updates": "~0.15.5",
    "moment": "^2.29.4",
    "moment-timezone": "^0.5.39",
    "react": "18.1.0",
    "react-loading": "^2.0.3",
    "react-native": "0.70.5",
    "react-native-crypto-js": "^1.0.0",
    "react-native-gesture-handler": "^2.8.0",
    "react-native-reanimated": "^2.13.0",
    "react-native-safe-area-context": "^4.4.1",
    "react-native-screens": "^3.18.2",
    "react-native-storage": "^1.0.1",
    "react-native-vector-icons": "^9.2.0",
    "react-redux": "^8.0.5",
    "redux": "^4.2.0"
