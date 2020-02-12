package com.marco.restServices.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity(name = "albums")
	@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
	public class Album {

	    @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    @Column(name="Id")
	    private Integer id;

	    @Column(name="Title")
	    private String title;

	    @Column(name="Release_Date", unique = true)
	    private String releaseDate;

	    @Column(name="Price", unique = true)
	    private String price;

	    @Column(name="Genre", unique = true)
	    private String genre;

		public Integer getId() {
			return id;
		}

		public void setId(Integer id) {
			this.id = id;
		}

		public String getTitle() {
			return title;
		}

		public void setTitle(String title) {
			this.title = title;
		}

		public String getReleaseDate() {
			return releaseDate;
		}

		public void setReleaseDate(String releaseDate) {
			this.releaseDate = releaseDate;
		}

		public String getPrice() {
			return price;
		}

		public void setPrice(String price) {
			this.price = price;
		}

		public String getGenre() {
			return genre;
		}

		public void setGenre(String genre) {
			this.genre = genre;
		}

		public boolean checkEmpty() {
			if (this.getTitle().equals("") ||
				this.getReleaseDate().equals("") || 
				this.getPrice().equals("") || 
				this.getGenre().equals(""))return true;
			return false;
		}
		
		@Override
		public String toString() {
			return "Album [id=" + id + ", title=" + title + ", releaseDate=" + releaseDate + ", price=" + price
					+ ", genre=" + genre + "]";
		}

	}

