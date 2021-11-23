import { Container } from './styles'

export function Dashboard() {
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Nome do evento</th>
                        <th>Local</th>
                        <th>Dia da Semana</th>
                        <th>Horário</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Festival do Tomate</td>
                        <td>Paty do Alferes</td>
                        <td>Quarta, Quinta, Sexta</td>
                        <td>15 horas</td>

                        <td>
                        <button type="button" className="but1">
                            Excluir
                        </button>
                        </td>
                        
                        <td>
                        <button type="button" className="but2">
                            Like
                        </button>
                        </td>

                        <td>
                        <button type="button" className="but3">
                            Dislike
                        </button>
                        </td>
                    </tr>
                </tbody>
            </table>



        </Container>
    )
}