<?php

namespace App\Helpers;

class FileStorageHelper
{
        /**
         * push image to local storage
         * @param $req
         * @param $file
         * @return string
         */
        public function pushImageToLocalStorage($req, $file): string
        {
            $filenameWithExt = $req->file("$file")->getClientOriginalName();
            $filename = pathinfo($filenameWithExt, PATHINFO_FILENAME );
            $extension = $req->file("$file")->getClientOriginalExtension();
            $fileNameToStore = $filename  .'_'.time().'.'.$extension;
            $path = $req->file("$file")->storeAs('public/uploads', $fileNameToStore);
            return  $fileNameToStore;
        }
}
