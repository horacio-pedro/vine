class FlashNotification {
  RECOVERED_PASSWORD = 'Email de recuperação enviado'
  PASSWORD_NOT_RECOVERED = 'Erro no envio do email de recuperação'
  RESETED_PASSWORD = 'Nova password criada com sucesso'
  PASSWORD_NOT_RESETED = 'Erro ao criar nova password'
  INVALID_EMAIL = 'O email fornecido é inválido'
  INVALID_TOKEN = 'Token inválido, solicite um novo'
  EXPIRED_TOKEN = 'Token expirado, solicite um novo'
  INACTIVE_USER = 'Utilizador inactivo, contacte a equipa de suporte'
  EMAIL_NOT_CONFIRMED = 'Deve antes confirmar o email, verifique a sua caixa de emails'
  EMAIL_CONFIRMED = 'Email confirmado com sucesso'
  ERROR_IN_EMAIL_CONFIRMATION = 'Erro ao confirmar o email'
}

export default new FlashNotification()
