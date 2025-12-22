import { Button } from "@/src/components/Button";
import { InputText } from "@/src/components/InputText";
import { LogInIcon } from "lucide-react";

export default function Login() {
  return (
    <div className="flex h-screen">
      <div className="flex items-center justify-center text-center mx-auto w-xl">
        <form action="" className="flex-1 flex flex-col gap-6">
          <InputText
            labelText="Email"
            type="email"
            name="email"
            placeholder="Digite seu usuario"
          />
          <InputText
            labelText="Senha"
            type="password"
            name="password"
            placeholder="Digite sua senha"
          />
          <Button variant="default" size="sm">
            <LogInIcon />
            Entrar
          </Button>
        </form>
      </div>
    </div>
  );
}
