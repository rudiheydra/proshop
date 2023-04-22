terraform {
    backend "gcs" {
        bucket = "proshop-383012-terraform"
        prefix = "/state/proshop"
    }
}