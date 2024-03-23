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
                        <h6 class="h3">Criar conta</h6>
                        <p class="text-muted mb-0">Crie a sua conta de empregador</p>
                      </div>
                      <span class="clearfix"></span>
                      <form action="/auth/signup" method="post">
                        <div class="row">
                          <div class="col-sm-12 col-md-6">
                            <div class="form-group">
                              <label class="form-control-label">Primeiro nome</label>
                              <div class="input-group input-group-merge">
                                <div class="input-group-prepend">
                                  <span class="input-group-text">
                                    <i class="fas fa-user"></i>
                                  </span>
                                </div>
                                <input class="form-control" type="text" name="first" required />
                              </div>
                            </div>
                          </div>
                          <div class="col-sm-12 col-md-6">
                            <div class="form-group">
                              <label class="form-control-label">Último nome</label>
                              <div class="input-group input-group-merge">
                                <div class="input-group-prepend">
                                  <span class="input-group-text">
                                    <i class="fas fa-user"></i>
                                  </span>
                                </div>
                                <input class="form-control" type="text" name="last" required />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="form-group">
                          <label class="form-control-label">Email</label>
                          <div class="input-group input-group-merge">
                            <div class="input-group-prepend">
                              <span class="input-group-text">
                                <i class="fas fa-envelope"></i>
                              </span>
                            </div>
                            <input class="form-control" type="email" name="email" required />
                          </div>
                        </div>
                        <div class="form-group mb-4">
                          <label class="form-control-label">Password</label>
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
                              pattern=".{6,12}"
                              onchange="this.setCustomValidity(this.validity.patternMismatch ? 'Deve conter no mínimo 6 characters' : '')"
                              autocomplete="on"
                              id="input-password"
                              required
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
                        <div class="mt-4">
                          <button class="btn btn-sm btn-primary btn-icon" type="submit">
                            <span class="btn-inner--text">Criar a conta</span>
                            <span class="event-next-btn">
                              <i class="fa fa-sign-in-alt"></i>
                            </span>
                          </button>
                        </div>
                      </form>
                    </div>
                    <div class="card-footer px-md-5">
                      <small>Já tem uma conta?</small>&nbsp;
                      <a class="small font-weight-bold" href="/app/auth/signin/employer">
                        Entrar agora
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
