import { App } from '@app/presenters/App'

export default (props: { title: string }) => {
  return (
    <App title={props.title}>
      <div class="main-content position-relative">
        <div class="page-content">
          <div class="min-vh-100 py-5 d-flex align-items-center">
            <div class="w-100">
              <div class="row justify-content-center">
                <div class="col-sm-8 col-lg-5">
                  <div class="card shadow zindex-100 mb-0">
                    <div class="card-body px-md-5 py-5">
                      <div class="mb-5">
                        <h6 class="h3">Entrar</h6>
                      </div>
                      <span class="clearfix"></span>
                      <form action="/app/auth/signin/developer" method="post">
                        <div class="form-group">
                          <div class="input-group input-group-merge">
                            <button class="btn btn-sm btn-primary btn-icon w-100" type="submit">
                              <span class="btn-inner--text">Entrar com GitHub</span>
                              <span class="event-next-btn" style='padding: inherit;'>
                                <i class="fab fa-github fa-2x"></i>
                              </span>
                            </button>
                          </div>
                        </div>
                        <div class="my-4">
                          <div class="custom-control custom-checkbox mb-3">
                            <input
                              class="custom-control-input"
                              type="checkbox"
                              id="check-terms"
                              required
                            />
                            <label class="custom-control-label" for="check-terms">
                              Concordo com os <a href="#">termos &amp; condições</a>
                            </label>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </App>
  )
}
