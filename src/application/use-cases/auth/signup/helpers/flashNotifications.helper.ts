class FlashNotification {
  EXP_SESSION = 'Sessão expirada, insira as credenciais para entrar novamente'
  LOGGED_IN = 'Sessão iniciada, bem-vindo de volta'
  END_SESSION = 'Terminou a sessão com sucesso!'
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
  NOT_SUPERADMIN = 'Você precisa ser um Super Administrador para acessar essa página'
  NOT_ADMIN = 'Você precisa ser um Administrador para acessar essa página'
  NOT_PROFILE = 'Este perfil não existe'
  UPDATED_PROFILE = 'Perfil atualizado com sucesso'
  NOT_UPDATED_PROFILE = 'Erro ao editar perfil'
  USER_EXISTS = 'Esta conta de email ou nome já está sendo utilizada'
  USER_NOT_EXISTS = 'Esta conta não existe'
  USER_CREATED = 'Conta criada com sucesso'
  USER_NOT_CREATED = 'Erro ao criar a conta'
  USER_UPDATED = 'Conta atualizada com sucesso'
  USER_NOT_UPDATED = 'Erro ao atualizar a conta'
  USER_DELETED = 'Conta excluída com sucesso'
  USER_NOT_DELETED = 'Erro ao excluir a conta'
  SIGNUP_WITHOUT_PLAN = 'Precisar selecionar um plano válido para criar a conta'
  INVALID_USER = 'Utilizador inválido'
}

export default new FlashNotification()
