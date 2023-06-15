# TO DO LIST

본 프로젝트는 자신의 To Do 목표와 목표를 위해 하고자 하는 말을 담아 기재하고 그것들을 보며 자신이 할 일과 해낸 일을 구분해볼 수 있는 페이지입니다.

※ github에 node_moudules를 제외하고 업로드 하였으니 npm install로 재설치 후 실행하시기 바랍니다.

## 소개

이 페이지는 react로 구성된 SPA 형태입니다.<br>
큰 부분을 차지하는 태그 구획별로 컴포넌트 분리가 이루어졌으니
각 내용을 담은 컴포넌트 별로 보시면 편합니다.

### Components

---

#### 1. App

전체적인 화면을 보여주는 컴포넌트입니다.<br>
JSX로 어떤 구성으로 각 컴포넌트들이 나뉘어 졌는지 props들이 분배 됐는지
확인할 수 있습니다.

#### 2. Layout

구성된 컴포넌트들을 감싼 컴포넌트입니다.<br>
화면의 가운데 정렬 및 최대/소 크기 지정을 위해 있습니다.

#### 3. Header

보여지는 화면의 HEADER 구역 컴포넌트입니다.

#### 4. Form

자신의 목표를 작성하고 기재할 수 있는 컴포넌트입니다.<br>
작성할 수 있는 공란에 내용을 작성 후 추가하기 버튼을 클릭 시 하단 화면으로 출력됩니다.<br>
해당 기능들은 컴포넌트 내에 코드 및 주석을 통해 자세하게 볼 수 있습니다.

#### 5. List

기재된 목표가 화면에 출력되는 컴포넌트입니다.<br>
Working과 Done 공간을 통해 무엇이 진행중인지, 완료됐는지 확인할 수 있습니다.

#### 6. Cards

기재한 목표가 들어있는 컴포넌트입니다.<br>
카드안엔 삭제, 완료/취소 버튼이 있으며 Working 공간에 있을 경우 완료 버튼만이 나타나며 버튼을 누를 시 Done 공간으로 이동합니다.<br>
Done 공간에 있을 경우 취소 버튼만이 나타나고 버튼 클릭 시 Working 공간으로 이동합니다.
해당 기능들은 컴포넌트 내에 코드 및 주석을 통해 자세하게 볼 수 있습니다.
