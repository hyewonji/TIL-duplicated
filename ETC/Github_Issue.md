# Github Issue를 통한 프로젝트 관리 및 협업

Github을 활용해 협업할 수 있는 방법중 Issue를 통한 프로젝트 관리를 공부해보았다.

## 프로젝트 생성

1. 관리하고자 하는 레포지토리에 들어가 project 탭을 클릭한다,
2. `Create a project`를 클릭한다.
3. Project name, Description, Template을 선택한다.

- Template

  - None : 아무 것도 없이 프로젝트만 생성한다.
  - Basic Kanban : To Do, In Progress, Done 이 생성된다.
  - Automated kanban : To Do, In Progress, Done이 생성된다. (위에와 다른 것은 자동화를 지원한다. **이슈를 통한 프로젝트 자동 관리**가 가능하다.)
  - Automated kanban with reviews : To Do, In Progress, Review In Progress, Reviewer Approved Done 이 생성된다.
  - Bug triage : Needs triage, High priority, Low priority, Close가 생성이 된다.

  이번 글에서는 이슈를 통한 프로젝트 관리를 살펴볼것이기 때문에 프로젝트 생성시 Template을 **Automated kanban**을 선택한다.

## 프로젝트 관리

프로젝트를 생성하면 To Do, In Progress, Done이 생성된다.

- To Do
  - 새로 추가 되는 모든 이슈가 해당(해야할 것, 새로운 기능 추가, 기능 수정 등등)
  - 새로 추가 되는 모든 PR이 해당
- In Progress
  - 작업이 진행중 이라는 것을 의미
  - 새로 열린 모든 PR이 해당
  - 새로 열린 모든 이슈가 해당
- Done
  - Close된 이슈가 해당
  - Merge가 된 PR이 해당

## 이슈 생성

이슈는 작업의 버그 수정, 새로운 추가될 기능, 개선해야하는 기능 등등 모든 것이 될 수 있다. 모든 활동 내역에 대해 이슈를 등록하고 그 이슈를 기반으로 작업을 진행하며 프로젝트를 관리 할 수 있다. 그리고 이슈를 생성하면 프로젝트 To Do 목록에 추가가 된다.

이슈 생성시 필요한 항목은 다음과 같다.

- Assigneers : 해당 작업의 담당자
- Labels : 해당 작업의 특징( 새로운 라벨을 생성 , 커스텀 가능하다 )
- Projects : 해당 작업이 속하는 프로젝트 명
- Milestone : 프로젝트가 도달해야 하는 목표 지점( 해당 목표의 진행상황을 볼 수 있어 단위별 관리가 가능해 유용하다. )

## 이슈 닫기

관리하고자 하는 이슈에 들어가서 `close issue`를 누르면 이슈가 닫아진다. 동시에 프로젝트의 칸반에서 To Do에 있던 **이슈가 자동으로 Done으로 이동**한다.

[참조링크](https://devlog-wjdrbs96.tistory.com/227)
