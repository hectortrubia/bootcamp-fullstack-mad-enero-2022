import { useSearchParams } from "react-router-dom";

/**
 * Es una página que puede recibir dos query params (op1 y op2) que son dos números
 * que tendrá que multiplicar. Si alguno no existe, lo inicializo a 10
 */
function DemoQuery() {
    const [queryParams] = useSearchParams();
    const op1 = queryParams.get('op1') ?? 10;
    const op2 = queryParams.get('op2') ?? 10;
    return (
        <section>
            <p>Query OP1: {queryParams.get('op1')}</p>
            <p>Query OP2: {queryParams.get('op2')}</p>
            <p>Resultado: {parseFloat(op1) + parseFloat(op2)}</p>
        </section>
    )

}


export default DemoQuery;