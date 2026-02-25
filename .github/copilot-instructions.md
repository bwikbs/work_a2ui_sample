# Copilot 에이전트를 위한 빠른 가이드

이 문서는 이 저장소에서 AI 코딩 에이전트를 바로 생산적으로 만들기 위한 핵심 탐색/작업 지침을 제공합니다.

요약
- 현재 이 리포지토리는 빈 상태로 보입니다. (루트에 소스/매니페스트 파일이 없습니다.)
- 따라서 먼저 '발견(Discover)' 단계가 중요합니다. 파일이 추가되면 아래 절차를 따라 코드 구조와 빌드/테스트 흐름을 파악하십시오.

빠른 발견(우선순위 순)
1. 루트에서 아래 파일(또는 디렉터리)을 검색하십시오: `package.json`, `pyproject.toml`, `requirements.txt`, `Pipfile`, `go.mod`, `Cargo.toml`, `pom.xml`, `build.gradle`, `Makefile`, `Dockerfile`, `docker-compose.yml`, `.github/workflows/`, `src/`, `services/`, `packages/`, `apps/`, `frontend/`, `backend/`, `.env`, `.env.example`.
2. CI/워크플로: `.github/workflows/` 내부를 열어 빌드/테스트/릴리스 스텝과 환경변수를 확인합니다.
3. 컨테이너/배포: `Dockerfile`, `docker-compose.yml`, `k8s/` 매니페스트 유무를 확인해 로컬 실행 방법을 파악합니다.

권장 탐색 명령 (로컬에서 실행)
```bash
# 유닉스/윈도우(WSL/Git Bash)
ls -la
ls **/package.json **/pyproject.toml **/.github/workflows -R 2>/dev/null

# Windows PowerShell
Get-ChildItem -Recurse -File -Force | Where-Object { $_.Name -match 'package.json|pyproject.toml|Dockerfile|Makefile' }
```

빌드·테스트 추론 규칙 (파일별 예시)
- `package.json` 발견 시: `npm ci` 또는 `yarn install`, `npm test`를 우선 시도합니다. `scripts` 섹션을 열어 커스텀 명령을 사용하세요.
- `pyproject.toml`/`requirements.txt` 발견 시: `pip install -r requirements.txt` 또는 `poetry install`, 테스트는 `pytest`를 먼저 검색합니다.
- `go.mod` 발견 시: `go test ./...` 를 사용합니다.
- `Dockerfile` 존재 시: 컨테이너로 빌드/실행(예: `docker build -t app .`)하여 런타임을 재현합니다.

코드·아키텍처 패턴 검색 포인트
- 모노레포 여부: `packages/`, `services/`, `apps/` 폴더가 있으면 여러 패키지/서비스 경계가 있는지 확인합니다.
- 프론트엔드/백엔드 분리: `frontend/` 와 `backend/` 또는 `client/`와 `server/`를 찾아 통신 방식(REST/gRPC/GraphQL)을 파악합니다.
- 데이터 흐름: `migrations/`, `db/`, `models/` 파일에서 DB 스키마와 마이그레이션 패턴을 확인합니다.
- 설정·시크릿: `.env.example`, `.env`, `secrets/`를 찾아 환경변수와 외부 서비스(endpoints, keys) 의존성을 추출합니다.

프로젝트 특이 관례(탐색 시 기록할 것)
- 코드 생성: `scripts/` 또는 `tools/` 내 코드 생성 스크립트가 있는지 확인하고, 생성된 파일(예: `src/generated/`)을 구분합니다.
- Lint/포맷: `eslint`, `prettier`, `black`, `ruff` 설정 파일을 찾아 포맷/린팅 규칙을 따르세요.
- 테스트 격리: 통합/단위 테스트 디렉터리(예: `tests/`, `integration-tests/`)를 구분해 실행 순서를 판단합니다.

안전/커밋·PR 관련
- 민감정보: 저장소에 비밀번호/키가 있는지 자동 검색(예: `git grep 'AWS_SECRET|PASSWORD|PRIVATE_KEY'`)하고 보고합니다.
- 변경 제안: 큰 변경(예: 아키텍처 리팩터)은 먼저 이슈/PR 템플릿을 찾고(예: `CONTRIBUTING.md`) 리뷰 가이드를 따르세요.

작업 예시(에이전트가 실제로 수행할 체크리스트)
1. 루트 파일 리스트 출력 및 주요 매니페스트 열람
2. CI 워크플로·Dockerfile·매니페스트에서 빌드/런/테스트 스텝 추출
3. 발견된 빌드 명령으로 안전하게(읽기 전용) 테스트 실행 가능성 확인
4. 아키텍처 요약(서비스 목록, 주요 엔트리포인트, 외부 의존성)을 간단한 다이어그램 형태로 정리

마침
- 이 리포지토리는 현재 빈 상태여서 '탐색 우선' 지침을 제공합니다. 파일이 추가되면 제가 찾아낸 구체적 코드경로(예: 폴더/파일명)를 예시로 삼아 이 문서를 업데이트하겠습니다.

피드백 요청: 불명확한 부분이나 추가로 자동화하길 원하는 탐색/검증 항목이 있으면 알려주세요.
