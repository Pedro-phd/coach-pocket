import { Rocket02Icon, UserAdd01Icon } from 'hugeicons-react'

import AddMemberForm from './add-member-form'

export default function NewMemberPage() {
  return (
    <div
      className="
        border rounded-md w-full h-full flex 
        justify-center items-center overflow-hidden
        bg-white
      "
    >
      <div
        className="
        hidden md:flex flex-col justify-center p-4 
        bg-gradient-to-tr from-indigo-800 to-indigo-500 h-full w-1/2"
      >
        <Rocket02Icon className="text-white size-16 lg:size-24" />
        <h1 className="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-8xl text-white">
          Novo aluno
        </h1>
        <h3 className="scroll-m-20 text-base lg:text-2xl tracking-tight text-white">
          Traga um novo aluno para o time, juntos somos mais fortes!
        </h3>
      </div>

      <div className="flex flex-col justify-center m-auto border rounded-lg w-fit bg-white overflow-hidden">
        <div className="flex items-center gap-2 p-2 border-b">
          <UserAdd01Icon className="text-muted-foreground size-4" />
          <p className="text-sm text-muted-foreground">Novo Aluno</p>
        </div>
        <div className="flex flex-col md:hidden p-3 justify-center items-center py-4">
          <Rocket02Icon className="text-indigo-600 size-16" />
          <h1 className="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-8xl text-card-foreground">
            Novo aluno
          </h1>
          <h3 className="scroll-m-20 text-base lg:text-2xl tracking-tight text-card-foreground">
            Traga um novo aluno para o time, juntos somos mais fortes!
          </h3>
        </div>

        <AddMemberForm />
      </div>
    </div>
  )
}
