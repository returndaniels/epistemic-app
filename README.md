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

### Gerando uma release APK com `react-native-cli`

Use o keytool uma chave de assinatura gerada por Java, que é um arquivo keystore usado para gerar um binário executável React Native para Android. (keytool pode ser encontrado em `<java_path>/bin/keytool`)

```
keytool -genkey -v -keystore <your_key_name>.keystore -alias <your_key_alias> -keyalg RSA -keysize 2048 -validity 10000
```

Como resultado obterá o arquivo `<your_key_name>.keystore ` válido por 10.000 dias. Mova esse arquivo para a pasta `android/app` do seu projeto.

Configure o arquivo `android\app\build.gradle`

```
android {
....
  signingConfigs {
    release {
      storeFile file('your_key_name.keystore')
      storePassword 'your_key_store_password'
      keyAlias 'your_key_alias'
      keyPassword 'your_key_file_alias_password'
    }
  }
  buildTypes {
    release {
      ....
      signingConfig signingConfigs.release
    }
  }
}
```

Na raíz do projeto execute o seguinte comando: (certifiqui-se que exista a pasta `android/app/src/main/assets`)

```
react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res/
```

Acesse a pasta android com:

```
cd android
```

E execute o seguinte comando

```bash
gradlew assembleRelease # para Windows
./gradlew assembleRelease # Para Linux ou Mac

```

Como resultado, o processo de criação do APK é concluído . Você pode encontrar o APK gerado em `android/app/build/outputs/apk/app-release.apk`

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
