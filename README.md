Node Sonar Demo – Proyecto de ejemplo con SonarCloud

Este proyecto es un ejemplo mínimo en Node.js + Jest configurado para integrarse con SonarCloud usando GitHub Actions y el plan gratuito.

🚀 1. Requisitos

Node.js 16+

GitHub

Cuenta en SonarCloud

Proyecto configurado en SonarCloud

Token SONAR_TOKEN creado en
GitHub → Settings → Secrets → Actions

📦 2. Instalación
npm install

🧪 3. Ejecutar pruebas
npm test


Esto genera el reporte de cobertura en coverage/.

☁️ 4. Integración con SonarCloud

El archivo de configuración está en:

sonar-project.properties


Configura:

sonar.projectKey=node_sonar_demo
sonar.organization=tu_organization

🤖 5. GitHub Actions

El workflow se encuentra en:

.github/workflows/sonar.yml


Este workflow ejecuta:

Checkout

Instalación de dependencias

Pruebas + cobertura

Análisis SonarCloud

Se activa automáticamente con:

Push a main

Pull Requests

📊 6. Ver resultados en SonarCloud

Una vez ejecutado el pipeline:

👉 Inicia sesión en
https://sonarcloud.io

y revisa el proyecto con la llave configurada.

✔️ 7. Estructura del proyecto
node-sonar-demo/
 ├─ src/
 ├─ tests/
 ├─ .github/workflows/
 ├─ package.json
 ├─ jest.config.js
 ├─ sonar-project.properties
 └─ README.md