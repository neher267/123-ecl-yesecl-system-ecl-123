<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ProductInquiryStoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name'=>'required|string|max:50|min:3',
            'designation'=>'nullable|string|max:50|min:3',
            'email'=>'required|string|max:191',
            'company'=>'nullable|string|max:191',
            'mobile'=>'required|string|max:14',
            'message'=>'required|string|max:400',
        ];
    }
}
