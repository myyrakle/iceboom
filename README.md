# iceboom

![](https://img.shields.io/badge/language-Typescript-red) ![](https://img.shields.io/badge/version-0.5.1-brightgreen) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/myyrakle/iceboom/blob/master/LICENSE)

swagger를 통해 axios api 함수들을 자동 생성해주는 라이브러리입니다.

###
모듈은 다음과 같이 설치하면 됩니다.
```
npm i --save iceboom
```

###
그럼 nestjs에서 다음과 같이 사용 가능합니다.
```
import { NestFactory } from '@nestjs/core';
import { AppModule } from './module/app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as iceboom from 'iceboom';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('테스트')
    .setDescription('테스트용 문서입니다.')
    .setVersion('1.0')
    .addTag('foo')
    .addTag('cms', '관리자 API입니다.')
    .addTag('user', '사용자 API입니다.')
    .addTag('cdn', 'cdn 처리할 공개 API입니다.')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  const basePath = 'http://localhost:3000/prod/v1';
  iceboom.generateAxios(document, basePath);

  await app.listen(3000);
}
bootstrap();

```
generateAxios 함수에는 순서대로 swagger json 객체, API 기본경로를 전달받습니다.


