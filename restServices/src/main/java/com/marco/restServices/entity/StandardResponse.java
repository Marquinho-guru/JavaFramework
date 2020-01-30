package com.marco.restServices.entity;

public class StandardResponse <T> {

	private String status;
	
	private String responseText;
	
	private T entity;

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getResponseText() {
		return responseText;
	}

	public void setResponseText(String responseText) {
		this.responseText = responseText;
	}

	public T getEntity() {
		return entity;
	}

	public void setEntity(T entity) {
		this.entity = entity;
	}

	@Override
	public String toString() {
		return "StandardResponse [status=" + status + ", responseText=" + responseText + ", entity=" + entity + "]";
	}
	
}
