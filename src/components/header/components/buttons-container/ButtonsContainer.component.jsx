import { loginAccountStore } from '../../../../states/login/loginStore';
import { classNames } from '../../../../utils';
import { HeaderMenu } from '../header-menu/HeaderMenu.component';
import { LoginButton } from '../login-button/LoginButton.component';
import './buttonsContainer.style.scss';

export const ButtonsContainer = ({ className }) => {
	const { isLogin } = loginAccountStore();

	return (
		<div className={classNames('global-header__btn-container', className)}>
			{/* 로그인/회원가입 버튼 */}
			{!isLogin ? <LoginButton /> : ''}
			{/* 햄버거 버튼 */}
			<HeaderMenu />
		</div>
	);
};
