import { UmbTextStyles } from '@umbraco-cms/backoffice/style';
import { css, html, customElement, state, query, unsafeHTML } from '@umbraco-cms/backoffice/external/lit';
import { UmbLitElement } from '@umbraco-cms/internal/lit-element';
import { ProfilingResource } from '@umbraco-cms/backoffice/backend-api';
import { tryExecuteAndNotify } from '@umbraco-cms/backoffice/resources';

@customElement('umb-dashboard-performance-profiling')
export class UmbDashboardPerformanceProfilingElement extends UmbLitElement {
	@state()
	private _profilingStatus = true;

	// TODO: Get this from the management api configuration when available
	@state()
	private _isDebugMode = true;

	@query('#toggle')
	private _toggle!: HTMLInputElement;

	#setToggle(value: boolean) {
		this._toggle.checked = value;
		this._profilingStatus = value;
	}

	firstUpdated() {
		this._getProfilingStatus();
	}

	private async _getProfilingStatus() {
		const { data } = await tryExecuteAndNotify(this, ProfilingResource.getProfilingStatus());

		if (!data || !data.enabled) return;
		this._profilingStatus = data.enabled;
	}

	private async _changeProfilingStatus() {
		const { error } = await tryExecuteAndNotify(
			this,
			ProfilingResource.putProfilingStatus({ requestBody: { enabled: !this._profilingStatus } }),
		);

		if (error) {
			this.#setToggle(this._profilingStatus);
		} else {
			this.#setToggle(!this._profilingStatus);
		}
	}

	private renderProfilingStatus() {
		return this._isDebugMode
			? html`
					${unsafeHTML(this.localize.term('profiling_performanceProfilingDescription'))}

					<uui-toggle
						id="toggle"
						label="Activate the profiler by default"
						label-position="left"
						?checked="${this._profilingStatus}"
						@change="${this._changeProfilingStatus}"></uui-toggle>

					<h4>${this.localize.term('profiling_reminder')}</h4>

					${unsafeHTML(this.localize.term('profiling_reminderDescription'))}
			  `
			: html` ${unsafeHTML(this.localize.term('profiling_profilerEnabledDescription'))} `;
	}

	render() {
		return html`
			<uui-box headline=${this.localize.term('profiling_performanceProfiling')}>
				${typeof this._profilingStatus === 'undefined' ? html`<uui-loader></uui-loader>` : this.renderProfilingStatus()}
			</uui-box>
		`;
	}

	static styles = [
		UmbTextStyles,
		css`
			:host {
				display: block;
				padding: var(--uui-size-layout-1);
			}

			uui-toggle {
				font-weight: bold;
			}

			h4 {
				margin-bottom: 0;
			}

			h4 + p {
				margin-top: 0;
			}
		`,
	];
}

export default UmbDashboardPerformanceProfilingElement;

declare global {
	interface HTMLElementTagNameMap {
		'umb-dashboard-performance-profiling': UmbDashboardPerformanceProfilingElement;
	}
}
