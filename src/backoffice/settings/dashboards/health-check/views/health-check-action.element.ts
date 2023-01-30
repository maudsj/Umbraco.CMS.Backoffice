import { UUIButtonState } from '@umbraco-ui/uui';
import { UUITextStyles } from '@umbraco-ui/uui-css/lib';
import { css, html, nothing } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';

import { HealthCheckAction, HealthCheckResource } from '@umbraco-cms/backend-api';
import { UmbLitElement } from '@umbraco-cms/element';
import { tryExecuteAndNotify } from '@umbraco-cms/resources';

@customElement('umb-dashboard-health-check-action')
export class UmbDashboardHealthCheckActionElement extends UmbLitElement {
	static styles = [
		UUITextStyles,
		css`
			:host {
				margin: var(--uui-size-space-4) 0;
				display: block;
				border-radius: var(--uui-border-radius);
				background-color: var(--uui-color-surface-alt);
			}
			form {
				margin: 0;
				padding: 0;
			}

			p {
				padding-top: 0;
				margin-top: 0;
			}

			.action {
				padding: 20px 25px;
				width: 100%;
			}

			.action uui-label {
				display: block;
			}

			.action uui-button {
				flex-shrink: 1;
			}

			.no-description {
				color: var(--uui-color-border-emphasis);
				font-style: italic;
			}

			.required-value {
				margin: 0 0 var(--uui-size-space-4);
			}
		`,
	];

	@property({ reflect: true })
	action!: HealthCheckAction;

	@state()
	private _buttonState?: UUIButtonState;

	private async _onActionClick(e: SubmitEvent) {
		e.preventDefault();
		this._buttonState = 'waiting';
		const { error } = await tryExecuteAndNotify(
			this,
			HealthCheckResource.postHealthCheckExecuteAction({ requestBody: this.action })
		);

		if (error) {
			this._buttonState = 'failed';
			return;
		}

		this._buttonState = 'success';
		this.dispatchEvent(new CustomEvent('action-executed'));
	}

	render() {
		return html` <div class="action">
			<p>${this.action.description || html`<span class="no-description">This action has no description</span>`}</p>
			<uui-form>
				<form @submit=${(e: SubmitEvent) => this._onActionClick(e)}>
					${this._renderValueRequired()}
					<uui-button
						type="submit"
						look="primary"
						color="positive"
						label="${this.action.name || 'Action'}"
						.state=${this._buttonState}>
						${this.action.name || 'Action'}
					</uui-button>
				</form>
			</uui-form>
		</div>`;
	}

	private _renderValueRequired() {
		if (this.action.valueRequired) {
			switch (this.action.providedValueValidation) {
				case 'email':
					return html` <div class="required-value">
						<uui-label for="action">Set new value:</uui-label>
						<uui-input
							id="action"
							type="email"
							@input=${(e: any) => (this.action.providedValue = e.target.value)}
							placeholder="Value"
							.value=${this.action.providedValue ?? ''}
							required></uui-input>
					</div>`;

				case 'regex':
					return html`<div class="required-value">
						<uui-label for="action">Set new value:</uui-label>
						<uui-input
							id="action"
							type="text"
							pattern="${ifDefined(this.action.providedValueValidationRegex ?? undefined)}"
							@input=${(e: any) => (this.action.providedValue = e.target.value)}
							placeholder="Value"
							.value=${this.action.providedValue ?? ''}
							required></uui-input>
					</div>`;

				default:
					return html`<div class="required-value">
						<uui-label for="action">Set new value:</uui-label>
						<uui-input
							id="action"
							type="text"
							@input=${(e: any) => (this.action.providedValue = e.target.value)}
							placeholder="Value"
							.value=${this.action.providedValue ?? ''}
							required></uui-input>
					</div>`;
			}
		}

		return nothing;
	}
}

export default UmbDashboardHealthCheckActionElement;

declare global {
	interface HTMLElementTagNameMap {
		'umb-dashboard-health-check-action': UmbDashboardHealthCheckActionElement;
	}
}
