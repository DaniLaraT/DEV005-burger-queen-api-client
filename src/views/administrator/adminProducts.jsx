import ButtonViews from '../../components/Button/ButtonView/ButtonView';
import HeaderAdmin from "../../components/headerAdmin/headerAdmin";
import OptionProductsAdm from "../../components/optionProductsAdmList/OptionProductsAdm";
import './adminProducts.css';

const AdminProducts = () => (
    <>
    <div className='body'>
      <HeaderAdmin title='ADMIN' />
      <div>
        {/* Actualiza el botón para que cambie el tipo de producto */}
        <ButtonViews
          Text1={'USUARIO'}
          Text2={'PRODUCTO'}
          onClickButton1={() => setSelectedProductType('USUARIO')}
          onClickButton2={() => setSelectedProductType('PRODUCTO')}
        />
      </div>
      
      < OptionProductsAdm/>
    </div>
    </>
  )

  
  export default AdminProducts