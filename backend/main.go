package main

import (
	"net/http"
)

func main() {
	http.HandleFunc("GET api/health",
		func(w http.ResponseWriter, r *http.Request) {
			w.Header().Set("Content-Type", "application/json")

			w.Header().Set("Access-Control_Allow-Origin", "*")

		})
}
