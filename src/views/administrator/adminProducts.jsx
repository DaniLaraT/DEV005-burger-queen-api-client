import MainTitle from "../../components/MainTitle/MainTitle";
import Header from "../../components/header/Header"
import HeaderAdmin from "../../components/headerAdmin/headerAdmin";
import OptionProductsAdm from "../../components/optionProductsAdmList/OptionProductsAdm";
import './adminProducts.css';

const AdminProducts = () => (
    <>
    <div className='body'>
      <HeaderAdmin title='ADMIN' />
      < MainTitle/>
      < OptionProductsAdm/>
    </div>
    </>
  )

  
  export default AdminProducts