import { LandingPage } from '@app/presenters'

export default (props: { title: string }) => {
  return (
    <LandingPage  title={props.title}>
      <div class="c29n1 cfi8v cklpe co3fs">
        <header class="cx5bd csam5 cjkjb">
          <div class="cdcfy cl9ye chlof cc8xx">
            <div class="c29n1 cx10f c38qt crjhh coh5t">
              <div class="cpmys ce0su">
                <a class="c4ozt" href="/">
                  <img
                    src="/img/vine-high-resolution-logo-black-transparent.svg"
                    alt="vine app"
                    style="width: 175px"
                  />
                </a>
              </div>
            </div>
          </div>
        </header>
        <main class="c7e8i">
          <section>
            <div class="cdcfy cl9ye chlof cc8xx">
              <div class="cmprh czcbq c823v c6lgd">
                <div class="cu831 cf4lx ca0tr">
                  <div class="ch97d c7e8i clpz0 cwe4v cfe0z c226t">
                    <h1 class="caveb ceonn">Comece em poucos passos</h1>
                    <div class="c8glp">
                      <ul class="c98p9 cklpe czlr6 c3z20">
                        <li class="c29n1 c38qt cjmb3">
                          <span
                            class="ce0su cqma5"
                            style="background: #dbeafe; color: #3b82f6; padding: 1px 6px; border-radius: 50%; font-size: small"
                          >
                            &check;
                          </span>
                          <span>Crie uma conta</span>
                        </li>
                        <li class="c29n1 c38qt cjmb3">
                          <span
                            class="ce0su cqma5"
                            style="background: #dbeafe; color: #3b82f6; padding: 1px 6px; border-radius: 50%; font-size: small"
                          >
                            &check;
                          </span>
                          <span>Pesquise por vagas / candidatos</span>
                        </li>
                        <li class="c29n1 c38qt cjmb3">
                          <span
                            class="ce0su cqma5"
                            style="background: #dbeafe; color: #3b82f6; padding: 1px 6px; border-radius: 50%; font-size: small"
                          >
                            &check;
                          </span>
                          <span>Candidata-se / Contacta o candidato</span>
                        </li>
                      </ul>
                    </div>
                    <div class="cjkjb">
                      <div class="c755p clpz0 cwyp8 cnxvz cff69 c6nbq cwiv0 c226t">
                        Confiado pelos melhores
                      </div>
                      <div class="cc2i9 c29n1 c3d4t c38qt cxwmo c919v cf5hq c0b1p">
                        <div class="cbihh cu4gs clzlu">
                          <img
                            class="c98p9 cb320"
                            src="/img/logo-facebook.svg"
                            width="99"
                            height="19"
                            alt="Facebook"
                          />
                        </div>
                        <div class="cbihh cu4gs clzlu">
                          <img
                            class="c98p9 cb320"
                            src="/img/logo-nike.svg"
                            width="64"
                            height="23"
                            alt="Nike"
                          />
                        </div>
                        <div class="cbihh cu4gs clzlu">
                          <img
                            class="c98p9 cb320"
                            src="/img/logo-samsung.svg"
                            width="95"
                            height="32"
                            alt="Samsung"
                          />
                        </div>
                        <div class="cbihh cu4gs clzlu">
                          <img
                            class="c98p9 cb320"
                            src="/img/logo-disney.svg"
                            width="86"
                            height="36"
                            alt="Disney"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="cyhno ce0su clpz0 c226t">
                    <div
                      class="cistn cx5bd ctehq cakxp c88x7 cf5et chf8c ch1vk c5aqy c43am cjqzn ckk3f catjv c0jii"
                      aria-hidden="true"
                    ></div>
                    <img
                      class="cistn cx5bd c08f2 cfhlr cakxp cr579 czw6c cs15f cleik c89jy cb6o0"
                      src="/img/hero-illustration.svg"
                      width="960"
                      height="960"
                      aria-hidden="true"
                    />
                    <div class="c29n1 c4i6y c2xto c9ob8 cdc85" style='margin-top: 110px'>
                      <div class="cdcfy cjkjb cbo7w c36be c5att cbjbi cqqyw cy215 c7e3v c84ry" style='height: 200px'>
                        <form>
                          <div class="cf5tr">
                            <div class="cdjl1 crjhh c5mm2 c896x">
                              <button type='button' onclick="location.href='/app/auth/signin/developer'" class="cn4p0 c98p9 c38qt ckk70 cyuce co504 cv52j ck31x" style='width: 100%'>
                                Criar conta de programador
                              </button>
                            </div>
                            <div class="cdjl1 crjhh c5mm2 c896x">
                              <button type='button' onclick="location.href='/app/auth/signup/employer'" class="cn4p0 c98p9 c38qt ckk70 cyuce co504 cv52j ck31x" style='width: 100%; margin-top: 80px'>
                                Criar conta de empregador
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </LandingPage>
  )
}
