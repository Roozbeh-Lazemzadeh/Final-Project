import React from "react";
import "./SignIn.css";

export default function SignIn() {
	return (
		<div class="wrapper">
			<div class="content">
				<div class="login_page_wrapper">
					<form class="login_page_form">
						<div class="login_page_form_head">
							<h1 class="login_page_form_head_title">ورود</h1>
							<div class="login_page_form_head_link">
								حساب کاربری ندارید؟
								<a
									href="https://hexdownload.co/auth/register"
									class="login_page_form_head_link_txt"
								>
									ثبت نام کنید
								</a>
							</div>
						</div>
						<div class="login_page_form_item">
							<label class="login_page_form_item_label" for="mobile">
								شماره موبایل
							</label>
							<input
								class="login_page_form_item_input"
								type="tel"
								name="mobile"
								id="mobile"
								placeholder="09xxxxxxxxx"
								dir="ltr"
								autocomplete="off"
							/>
						</div>
						<div class="login_page_form_actions">
							<button type="submit" class="login_page_form_actions_submit">
								<span class="login_page__form__actions__submit__txt">ورود</span>
								<span class="login_page__form__actions__submit__progress">
									لطفا کمی صبر کنید...
									<span class="login_page__form__actions__submit__progress__spinner"></span>
								</span>
							</button>
						</div>
					</form>
				</div>
			</div>
			<div class="footer">
				<div class="footer__links">
					<a href="https://hexdownload.co" class="footer__links__item">
						خانه
					</a>
					<a href="https://hexdownload.co/contact/" class="footer__links__item">
						تماس با ما
					</a>
					<a
						href="https://hexdownload.co/bug-report/"
						class="footer__links__item"
					>
						گزارش باگ
					</a>
				</div>
			</div>
		</div>
	);
}
