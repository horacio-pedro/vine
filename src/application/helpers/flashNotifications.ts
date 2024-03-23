class FlashNotifications {
  ERROR = 'error'
  WARNING = 'warning'
  SUCCESS = 'success'
  WRONG = 'URGENTE: '
  NOT_ALLOWED = 'Não tem permissão para acessar essa página'
  MAILED = 'Email enviado com sucesso'
  NOT_MAILED = 'Erro no envio do email'
  NO_CHANGE = 'Nenhuma alterção foi efetuada'
  EXP_SESSION = 'Sessão expirada, insira as credenciais para entrar novamente'
  EMAIL_NOT_CONFIRMED = 'Deve antes confirmar o email, verifique a sua caixa de emails'
}

export default new FlashNotifications()
