import Logo from '../../assets/logo.png'
function Navbar() {
    
    return (
        <>
        <div className='w-full bg-[#282424] text-white flex justify-center py-4'>
            <div className="container flex justify-between text-lg">
                <div className='text-2xl font-bold uppercase'> <img src={Logo} alt="" width="200" /></div>

                <div className='flex gap-4'>
                <div className='hover:underline'>Produtos</div>
                <div className='hover:underline'>Categorias</div>
                <div className='hover:underline'>Cadastrar categorias</div>
                </div>
            </div>
            </div>
        </>
    )
    }

    export default Navbar