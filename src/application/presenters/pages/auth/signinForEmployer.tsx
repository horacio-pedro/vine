import { App } from '@app/presenters/App'

export default (props: { title: string }) => {
  return (
    <App title={props.title}>
      <div class="main-content position-relative">
        <div class="page-content">
          <div class="min-vh-100 py-4 d-flex align-items-center">
            <div class="w-100">
              <div class="row justify-content-center">
                <div class="col-sm-8 col-lg-4">
                  <div class="card shadow zindex-100 mb-0">
                    <div class="card-body px-md-5 py-5">
                      <div class="mb-5">
                        <h6 class="h3">Entrar</h6>
                      </div>
                      <span class="clearfix"></span>
                      <form action="/auth/signin" method="post">
                        <div class="form-group">
                          <label class="form-control-label">Email address</label>
                          <div class="input-group input-group-merge">
                            <div class="input-group-prepend">
                              <span class="input-group-text">
                                <i class="fas fa-user"></i>
                              </span>
                            </div>
                            <input class="form-control" type="email" name="email" />
                          </div>
                        </div>
                        <div class="form-group mb-4">
                          <div class="d-flex align-items-center justify-content-between">
                            <div>
                              <label class="form-control-label">Password</label>
                            </div>
                            <div class="mb-2">
                              <a
                                class="small text-muted text-underline--dashed border-primary"
                                href="/auth/recover-password"
                              >
                                Esqueceu a password?
                              </a>
                            </div>
                          </div>
                          <div class="input-group input-group-merge">
                            <div class="input-group-prepend">
                              <span class="input-group-text">
                                <i class="fas fa-key"></i>
                              </span>
                            </div>
                            <input
                              class="form-control"
                              type="password"
                              name="password"
                              autocomplete="on"
                              id="input-password"
                            />
                            <div class="input-group-append">
                              <span class="input-group-text">
                                <a
                                  href="javascript:void(0)"
                                  data-toggle="password-text"
                                  data-target="#input-password"
                                >
                                  <i class="far fa-eye"></i>
                                </a>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div class="mt-4">
                          <button class="btn btn-sm btn-primary btn-icon" type="submit">
                            <span class="btn-inner--text">Entrar</span>
                            <span class="event-next-btn">
                              <i class="fa fa-sign-in-alt"></i>
                            </span>
                          </button>
                        </div>
                      </form>
                    </div>
                    <div class="card-footer px-md-5">
                      <small>Não tem uma conta?</small>{' '}
                      <a class="small font-weight-bold" href="/app/auth/signup/employer">
                        Criar conta
                      </a>
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
